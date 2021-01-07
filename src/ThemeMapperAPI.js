import axios from 'axios';


export default function useThemeMap() {
    async function getCustomerTheme() {
        console.log('[TMAP] Fetching themes...');
        return (await axios.post('http://localhost:1234/getCustomerTheme', {
            cpeID: 'customer1'
        })).data;
    }

    return [getCustomerTheme];
};
