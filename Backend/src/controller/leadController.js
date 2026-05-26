import leadModel from "../models/leadModel.js";
import asyncHandler from "../utils/asyncHandler.js";

//create a new lead
export const createLeadController = asyncHandler(async (req, res) => {
    const { name, email, phone, message } = req.body;
    //Validation
    if (!name || !email || !phone || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    //duplication check
    const existingLead = await leadModel.findOne({ email });
    if (existingLead) {
        return res.status(400).json({ message: "Lead with this email already exists" });
    }

    const lead = await leadModel.create({
        name,
        email,
        phone,
        message
    })
    res.status(201).json({ message: "Lead created successfully", lead });
})

//read leads
export const getAllLeadsController = asyncHandler(async (req, res) => {
    const leads = await leadModel.find().sort({ createdAt: -1 });
    res.status(200).json({ leads });
});

//get lead by id
export const getLeadByIdController = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const lead = await leadModel.findById(id).sort({ createdAt: -1 });
    if (!lead) {
        return res.status(404).json({ message: "Lead not found" });
    }
    res.status(200).json({ lead });
});

//update lead
export const updateLeadController = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { status, notes } = req.body;

    const lead = await leadModel.findById(id);

    if (!lead) {
        return res.status(404).json({ message: "Lead not found" });
    }

    if (!status && !notes) {
        return res.status(400).json({ message: "At least one field (status or notes) is required for update" });
    }
    if (status) {
        lead.status = status;
    }

    if (notes) {
        lead.notes.push(notes);
    }

    await lead.save();
    res.status(200).json({ message: "Lead updated successfully", lead });

})

//delete lead
export const deleteLeadController = asyncHandler(async (req,res)=>{
    const {id} = req.params

    const lead = await leadModel.findById(id)

    if(!lead){
        return res.status(404).json({message:"Lead not found"})
    }

    await leadModel.findByIdAndDelete(id)
    res.status(200).json({message:"Lead deleted successfully"})
})