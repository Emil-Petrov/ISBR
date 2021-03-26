const userData = ({ data }) => {
    const { id, karma } = data.read();
    
    return <div>{id}: {karma}</div>
}

export default userData;