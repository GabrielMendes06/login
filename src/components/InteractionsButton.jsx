function InteractionsButton(props) {
    return(
        <div className="button-container" onClick={props.modalFunction}>
            <div>
                <img src={props.image}
                alt=""
                className="theme-icon"/>
            </div>
            <div>
                <p className="money-p">put money</p>
            </div>
        </div>
    )
}

export default InteractionsButton