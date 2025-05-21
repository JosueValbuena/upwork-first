"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"

interface InputPasswordCustom {
    id: string,
    name: string,
    value: string,
    onChange: any,
    placeHolder: string,
    customizedInput?: string,
}

const InputPasswordCustom = ({ id, name, value, onChange, placeHolder, customizedInput }: InputPasswordCustom) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="relative">
            <Input
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeHolder}
                type={showPassword ? "text" : "password"}
                className={customizedInput ? customizedInput : "pr-10"} />

            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-13 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
                {showPassword ? (
                    <Eye className="h-5 w-5" />
                ) : (
                    <div className="relative">
                        <EyeOff className="h-5 w-5" />
                        <div
                            className={cn("absolute top-1/2 left-0 w-full h-0.5 bg-gray-500 rotate-45 transform -translate-y-1/2")}
                        ></div>
                    </div>
                )}
            </button>
        </div>
    )
}
export default InputPasswordCustom