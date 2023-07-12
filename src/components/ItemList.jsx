import '../css/ItemList.css';
import Item from './Item';
import { ColorRing } from 'react-loader-spinner';
import { useState, useEffect } from 'react';

const ItemList = ({ list }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1365)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            {isSmallScreen ? (
                <>
                    {!list.length && <ColorRing visible={true} height="80" width="80" ariaLabel="blocks-loading" wrapperClass="blocks-wrapper-mobile" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} />}
                    {list.map(prod => <Item key={prod.id} {...prod} />)}
                </>
            ) : (
                <>
                    <div className="ListGroup">
                        {!list.length && <ColorRing visible={true} height="80" width="80" ariaLabel="blocks-loading" wrapperClass="blocks-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} />}
                        {list.map(prod => <Item key={prod.id} {...prod} />)}
                    </div>
                </>
            )}
        </>
    )
}
export default ItemList;
