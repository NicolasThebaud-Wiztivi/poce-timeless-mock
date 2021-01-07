import { useState, useEffect } from 'react';
import './App.css';
import useThemeMap from "./ThemeMapperAPI";
import axios from 'axios';

function App() {
    const [tid, setTid] = useState();

    const [customerTheme, setCustomerTheme] = useState({});
    const [getCustomerTheme] = useThemeMap();


    // Loop every second to simulate socket listening to updates
    useEffect(() => {
        const interval = setInterval(() => {
            const fetchData = async () => {
                const customerThemeRaw = (await getCustomerTheme());

                setTid(customerThemeRaw.id);
                setCustomerTheme(customerThemeRaw.style);
            };

            fetchData();
        }, 500);
        return () => clearInterval(interval);
    }, [customerTheme]);

    return (
        <div className="App" style={{'backgroundColor': customerTheme.$COLOR_LIGHT}}>
            <p> theme id n° {tid} </p>
            <h1 className="$COLOR_DARK" style={{'color': customerTheme.$COLOR_DARK}}>
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. sed non risus. [$COLOR_DARK]</h1>
            <h3 className="$COLOR_GREY_4" style={{'color': customerTheme.$COLOR_GREY_4}}>
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. sed non risus. [$COLOR_GREY4]</h3>
            <h3 className="$COLOR_GREY_5" style={{'color': customerTheme.$COLOR_GREY_5}}>
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. sed non risus. [$COLOR_GREY5]</h3>
            <p className="$COLOR_GREY_5" style={{'color': customerTheme.$COLOR_GREY_5}}>
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. sed non risus. [$COLOR_GREY5]</p>

            <button style={{'textTransform': customerTheme.$BUTTON_CASE}}>button</button>
        </div>
    );
}

export default App;
