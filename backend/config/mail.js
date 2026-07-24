import nodemailer from 'nodemailer'
import 'dotenv/config'

export const transforter = nodemailer.createTransport({ 
    service: 'gmail',
    auth: {
        user: process.env.Email_user,
        pass: process.env.Email_password
    } 
})

export default transforter; 