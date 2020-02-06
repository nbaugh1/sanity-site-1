import Typography from "typography";
import judahTheme from 'typography-theme-judah'

judahTheme.overrideThemeStyles = () => ({
    "a:hover,a:active": {
        color: '#6C7370',
        textDecoration: "none",
    },
})


const typography = new Typography(judahTheme);

export default typography;