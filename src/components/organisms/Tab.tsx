const Tab = ({ label, isActive, onClick }: { label: string, isActive: boolean, onClick: React.MouseEventHandler<HTMLButtonElement> | undefined }) => {
    return (
        <li className="tab__item">
            <div className={`tab ${isActive ? 'active' : ''}`}>
                <label className="tab__label">{label} </label><button className="tab__button | round clr-neutral-000" onClick={onClick} />
            </div>
        </li>
    );
};

export default Tab;