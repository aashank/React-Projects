import { useState } from "react";

const usePasswordGenerator = () => {

    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const getPasswordGenerator = (checkBoxData, passwordLength) => {
        let charset = ""
        let generatedPassword = ""

        const selectedOption = checkBoxData.filter((checkbox) => {
            return checkbox.status
        })

        if (selectedOption.length === 0) {
            setError("Select at least one option");
            setPassword("")
            return;
        }

        selectedOption.forEach((element) => {
            switch (element.title) {
                case "Include Uppercase Letters":
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Include Lowercase Letters":
                    charset += "abcdefghijklmnopqrstuvwxyz";
                    break;
                case "Include Numbers":
                    charset += "0123456789"
                    break;
                case "Include Symbols":
                    charset += "!@#$%^&*()";
                    break;
                default:
                    break;
            }
        });
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length)
            generatedPassword += charset[randomIndex];
        }
        setPassword(generatedPassword);
        setError("")
    };
    return { password, error, getPasswordGenerator }
}

export default usePasswordGenerator;