import React, { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom";

// function Detail(props) {
//     const location = useLocation();
//     console.log(location);
//     return <span>Hello</span>;
// }

class Detail extends React.Component {
    render() {
        const { location } = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>;
        }
    }
}

export function AppWithNavigate() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state === null) {
            navigate("/");
        }
    });

    return (<Detail location={location} />)
}

export default Detail;
