import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { styles } from "./styles"

interface Button extends TouchableOpacityProps {
    buttonText: string
}

export const Button = ({buttonText, ...rest}: Button) => {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <Text style={styles.buttonText} >{buttonText}</Text>
        </TouchableOpacity>
    )
}