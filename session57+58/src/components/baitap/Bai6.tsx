import axios from 'axios';
import React, { useEffect } from 'react';

interface Student {
    id: number;
    student_name: string;
    email: string;
    address: string;
    phone: string;
    status: boolean;
    created_at: string;
}

export default function Bai5() {
    useEffect(() => {
        const updateStudentById = (id: number, updatedStudent: Partial<Omit<Student, 'id' | 'created_at'>>) => {
            axios.put(`http://localhost:8080/students/${id}`, updatedStudent)
                .then(response => {
                    console.log('Response from server:', response.data);
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        };
        const studentId = 1;
        const updatedStudentData = {
            student_name: 'Minh thi',
            email: '.dminhthi@gmail.com',
            address: 'QN',
            phone: '234567',
            status: false
        };
        updateStudentById(studentId, updatedStudentData);
    }, []);

    return (
        <div>
        </div>
    );
}
