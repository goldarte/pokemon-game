const GamePage = ( {onChangePage} ) => {
    const handleClick = () => {
        onChangePage && onChangePage('home');
    }

    return (
        <div>
            <header>This is Game Page!</header>
            <p>
                <button onClick={handleClick}>
                    Return to home
                </button>
            </p>
        </div>
    );
};

export default GamePage