import { Request, Response } from "express";
import { Smartphone } from "../models/mobileModel";

let smartphones: Smartphone[] = []; 

const generateUniqueId = (): number => {
    let id: number;
    do {
        id = Math.floor(Math.random() * 90000) + 10000; 
    } while (smartphones.some(smartphone => smartphone.id === id)); 
    return id;
};

export const getSmartphone = (req: Request, res: Response) => {
    if (smartphones.length === 0) {
        return res.status(204).send();
    }
    res.status(200).json(smartphones.reverse());
};


export const createSmartphone = (req: Request, res: Response): Response => {
    const { name, model, storage } = req.body;

    if (!name || name.trim().length === 0) {
        return res.status(400).json({ message: "Nombre es requerido" });
    }

    const newSmartphone: Smartphone = {
        id: generateUniqueId(), 
        name: name.trim(),
        model: model ? model.trim() : '', 
        storage: storage ? storage.trim() : '', 
        completed: false,
    };

    smartphones.unshift(newSmartphone); 
    return res.status(201).json(newSmartphone); 
};


export const updateSmartphone = (req: Request, res: Response) => {
    const smartphoneId = parseInt(req.params.id);
    const { name, model, storage, completed } = req.body;

    const smartphoneIndex = smartphones.findIndex(t => t.id === smartphoneId);
    if (smartphoneIndex === -1) {
        return res.status(404).json({ message: "smartphone not found" });
    }

    if (name !== undefined) {
        smartphones[smartphoneIndex].name = name.trim();
    }
    if (model !== undefined) {
        smartphones[smartphoneIndex].model = model ? model.trim() : '';
    }
    if (storage !== undefined) {
        smartphones[smartphoneIndex].storage = storage ? storage.trim() : '';
    }
    if (completed !== undefined) {
        smartphones[smartphoneIndex].completed = completed;
    }

    res.status(200).json(smartphones[smartphoneIndex]);
};

export const deleteSmartphone = (req: Request, res: Response) => {
    const smartphoneId = parseInt(req.params.id);
    const smartphoneIndex = smartphones.findIndex(t => t.id === smartphoneId);

    if (smartphoneIndex === -1) {
        return res.status(404).json({ message: "smartphone not found" });
    }

    smartphones.splice(smartphoneIndex, 1);
    res.status(204).send(); 
};
