 
import '../BtnPrimary/styles.css'


interface BtnPrimaryProps {
    text: String
}
function BtnPrimary({ text }: BtnPrimaryProps) {
    return (
        <div>
            <button className="button-primary"><span>{text}</span></button>
        </div>
    )
}

export default BtnPrimary
