import { useEffect, useState } from "react";

const Page = () => {
    const [name, setName] = useState("");
    const [color, setColor] = useState("red");

    useEffect(() => {
        if (color == "red") {
            setColor("blue");
        } else {
            setColor("red");
        }
    }, [name]);

    return (
        <div>
            <input
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
            />

            <HelloLabel color={color} name={name} />
        </div>
    );
};

const HelloLabel = (props) => <p style={{ color: props.color }}>Hello, {props.name}!</p>;

export default Page;
