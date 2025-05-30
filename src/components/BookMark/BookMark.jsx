import PropTypes from "prop-types";

const BookMark = ({ bookMark }) => {
    const { title } = bookMark;
    return (
        <div className="bg-sky-700 p-4 m-4 rounded-2xl">
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};
BookMark.propTypes = {
    bookMark: PropTypes.object
}
export default BookMark;