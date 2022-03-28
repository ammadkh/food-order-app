import { Fragment } from "react"
import foodImage from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={foodImage} alt="Table full of Food"></img>
        </div>
    </Fragment>
}

export default Header;