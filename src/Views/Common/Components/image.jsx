export default function Image(props) {
    console.log(props.name)
    var imageSrc = require(`../../../assets/img/${props.name}`)
    return <img src={imageSrc.default} alt={props.alt} className={props.className} />
}