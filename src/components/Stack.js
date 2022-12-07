import PropTypes from "prop-types"

function Stack({chidren,spacing=2,direction="row",wrap=false}){
    const style = {
        display : "flex",
        gap : `${spacing * 0.25}rem`,
        flexWrap : wrap ? "wrap" : "nowrap",
        flexDirection : direction
    }
    return <div style={style}>{chidren}</div>
}

Stack.prototype = {
    spacing : PropTypes.number,
    wrap : PropTypes.bool,
    directio : PropTypes.oneOf(["row","column"])
}

export default Stack;