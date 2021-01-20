export default function Image(props) {
    return <img src={require(`../../../assets/img/${props.name}`)} alt="" />
}