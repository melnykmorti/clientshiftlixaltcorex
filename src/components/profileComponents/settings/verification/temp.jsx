
































<div className="verification__input verification__input-type">
<div className="verification__input-title">
    Select ID type
</div>
<div className="verification__input-element">
    <div
        className="select select-type"
        onClick={() =>
            setDocumentTypeActive(
                !documentTypeActive
            )
        }
    >
        <div className="select__selected">
            <div
                className="select__name"
                id="selected_id_type"
            >
                {state.idType}
            </div>
            <div className="select__arrow">
                <svg
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.10156 9.45312C6.3125 9.66406 6.66406 9.66406 6.875 9.45312L11.4453 4.90625C11.6562 4.67188 11.6562 4.32031 11.4453 4.10938L10.9062 3.57031C10.6953 3.35938 10.3438 3.35938 10.1094 3.57031L6.5 7.17969L2.86719 3.57031C2.63281 3.35938 2.28125 3.35938 2.07031 3.57031L1.53125 4.10938C1.32031 4.32031 1.32031 4.67188 1.53125 4.90625L6.10156 9.45312Z"
                        fill="#667085"
                    />
                </svg>
            </div>
        </div>
        <div
            className={`select__menu ${
                documentTypeActive
                    ? "select-active"
                    : ""
            }`}
        >
            {idTypes.map((item) => (
                <div
                    className="select__menu-item"
                    onClick={() =>
                        setState({
                            ...state,
                            idType: item,
                        })
                    }
                >
                    <div className="select__name">
                        {item}
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>
</div>