import react from "react";
const card = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.users.name}</h5>
                <h6 className="card-subtitle">{props.users.company.name}</h6>
                <p className="card-text">{props.user.company.catchphrase}</p>
            </div>
        </div>
    )
}
export default card;