import Attendance from '../models/attendanceModel.js';

export const createAttendance = async (req, res) => {
    const { employeeId, name, date, image } = req.body;

    try {
        const newAttendance = await Attendance.create({
            employeeId,
            name,
            date,
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
