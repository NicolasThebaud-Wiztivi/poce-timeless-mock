import { useState, useEffect } from 'react';
import './App.css';
import useThemeMap from "./ThemeMapperAPI";
import axios from 'axios';

function App() {
    // const [tn, setTn] = useState(0);
    const [colors, setColors] = useState({});
    const [customerTheme, setCustomerTheme] = useState({});
    const [getCustomerTheme] = useThemeMap();

    useEffect(() => {
        // TODO: update theme number in remote HERE

        const fetchData = async () => {
            const customerThemeRaw = await getCustomerTheme();
            console.warn('×', customerThemeRaw);
            setColors(customerThemeRaw.style.colors);
            setCustomerTheme(customerThemeRaw.style.colors);
        };

        fetchData();
    }, []);


    // Loop every second to simulate socket listening to updates
    useEffect(() => {
        const interval = setInterval(() => {
            const fetchData = async () => {
                const colorList = (await axios.get('http://localhost:4444/state')).data;
                console.warn('×', colorList);
                console.warn('××', customerTheme);
                console.warn('×××', Object.assign({}, customerTheme, colorList));
                Object.keys(colorList).length && setColors(Object.assign({}, customerTheme, colorList));
            };

            fetchData();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="App" style={{'backgroundColor': colors.$COLOR_LIGHT}}>
            <h1 className="$COLOR_DARK" style={{'color': colors.$COLOR_DARK}}>
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. sed non risus. [$COLOR_DARK]</h1>
            <h3 className="$COLOR_GREY_4" style={{'color': colors.$COLOR_GREY_4}}>
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. sed non risus. [$COLOR_GREY4]</h3>
            <h3 className="$COLOR_GREY_5" style={{'color': colors.$COLOR_GREY_5}}>
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. sed non risus. [$COLOR_GREY5]</h3>
            <p className="$COLOR_GREY_5" style={{'color': colors.$COLOR_GREY_5}}>
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. sed non risus. [$COLOR_GREY5]</p>
        </div>
    );
}

export default App;
