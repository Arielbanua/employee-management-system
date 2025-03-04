import Attendance from '../models/attendanceModel.js';

export const createAttendance = async (req, res) => {
    const { employeeId, name, image } = req.body;

    try {
        const now = new Date();
        
        // Format date as YYYY-MM-DD
        const date = now.toISOString().split('T')[0];
        
        // Format time as HH:MM:SS
        const time = now.toTimeString().split(' ')[0];
        
        const newAttendance = await Attendance.create({
            employeeId,
            name,
            date,
            time,
            image,
        });
        
        res.status(201).json(newAttendance);
    } catch (error) {
        console.error("Error creating attendance:", error);
        res.status(500).json({ message: "Error creating attendance" });
    }
};

export const getAttendances = async (req, res) => {
    try {
        const attendances = await Attendance.findAll();
        res.status(200).json(attendances);
    } catch (error) {
        console.error("Error fetching attendances:", error);
        res.status(500).json({ message: "Error fetching attendances" });
    }
};
