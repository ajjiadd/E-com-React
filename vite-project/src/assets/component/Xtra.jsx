import PropTypes from 'prop-types';

const Xtra = (props) => {
    return (
        <div>
            <button onClick={props.chldbtn}>Submit</button>
            <ul>
                <li>Name:{props.item['name']}</li>
                <li>Name:{props.item['age']}</li>
            </ul>
        </div>
    );
};

//for using props {this code used when you build code with "props method"}
//Step 1: " npm install prop-types "
//Step 2: " import PropTypes from 'prop-types' "
//Step 3: " Mentioned bellow "
Xtra.propTypes = {     
    chldbtn: PropTypes.func.isRequired, // Expecting a function for chldbtn prop
    item: PropTypes.func.isRequired // Expecting a function for item prop
};
//{end}for using props {this code used when you build code with "props method"}

export default Xtra;