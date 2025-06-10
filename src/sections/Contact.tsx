import { send } from "@emailjs/browser"
import { motion } from "motion/react"
import { useForm } from "react-hook-form"
import { CONTACTS } from "../bootstrap/contacts"

export default () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    return(
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <motion.div className="px-4 w-150 transition-all duration-500 delay-500" initial={{opacity: 0, transform: "translateY(-40px)"}} whileInView={{opacity: 1, transform: "translateY(0px)"}}>
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 
                bg-clip-text text-transparent text-center">Get in touch</h2>
                <form className="space-y-6 mb-8" onSubmit={handleSubmit((data) => {
                    if(Object.keys(errors).length !== 0){
                        alert(errors)
                        console.error(errors)
                        throw errors
                    }
                    const VITE_EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                    const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
                    const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
                    send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, data, {
                        publicKey: VITE_EMAILJS_PUBLIC_KEY, 
                        limitRate: {
                            throttle: 5 * 60 * 1000
                        }
                    }).then(() => {
                        alert("Email sent.")
                    },
                    (err) => {
                        alert("Email not sent.")
                        console.error(err)
                        throw(err)
                    })
                })}>
                    <div className="relative">
                        <input type="text" {...register("name", { required: true, minLength: 2})} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                        placeholder="Name..." aria-label="name"/>
                    </div>
                    <div className="relative">
                        <input type="email" {...register("email", { required: true})} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                        placeholder="E-mail..." aria-label="email"/>
                    </div>
                    <div className="relative">
                        <textarea {...register("message", {required: true})} rows={5} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                        placeholder="Your message..." aria-label="message"></textarea>
                    </div>
                    <input type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]" />
                </form>
                <div className="flex flex-row justify-center items-center font-bold mb-8 text-center">
                    {CONTACTS.map((v, i) => {
                        return(
                            <a href={`${v.type.prefix !== undefined ? v.type.prefix : ""}${v.contact.toString()}`} target="_blank"
                            aria-label={`My ${v.type.category}`} key={i}
                            className="text-blue-500 size-4 mx-2">
                                {v.icon}
                            </a>
                        )
                    })}
                </div>
            </motion.div>
        </section>
    )
}