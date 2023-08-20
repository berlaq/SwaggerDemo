import {Router, Request} from 'express';

export const employeeRouter = Router();

const employees = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'John Smith' },
];

interface UpdateEmployeeRequest extends Request {
    id: number;
    name: string;
}

employeeRouter.get('/getEmployees', (req, res) => {
    res.status(200).json(employees);
});

employeeRouter.get('/getEmployee/:id', (req, res) => {
    const employee = employees.find(e => e.id === parseInt(req.params.id));
    if (!employee) res.status(404).json({ message: 'Employee not found' });
    res.status(200).json(employee);
});

employeeRouter.patch('/updateEmployee', (req: UpdateEmployeeRequest, res) => {
   const employee = employees.find(e => e.id === req.body.id);
    if (!employee) res.status(404).json({ message: 'Employee not found' });

    // if employee is found, update the employee name
    employee.name = req.body.name;
    res.status(200).json(employee);
});

