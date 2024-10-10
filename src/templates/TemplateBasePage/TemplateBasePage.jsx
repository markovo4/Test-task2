import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header/index.js";

const TemplateBasePage = ({className = null, children}) => {
    return (
        <React.Fragment>
            <header>
                <Header/>
            </header>

            <main className={className}>
                {children}
            </main>

        </React.Fragment>
    )

}
TemplateBasePage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired
}
export default TemplateBasePage;