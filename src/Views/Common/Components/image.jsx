export default function Image(props) {
    var imageSrc = require(`../../../assets/img/${props.name}`)
    return <img style={props.style ? props.style : {}} src={imageSrc.default} alt={props.alt} className={props.className} />
}