import { MdClose } from 'react-icons/md';
import { useState } from 'react';

import "./Search.scss";
import { useNavigate } from 'react-router-dom';
import useFetch from "../../../hooks/useFetch";

const Search = ({ setShowSearch }) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const onChange = (browserEventForSearch) => {
        setQuery(browserEventForSearch.target.value);//this gets us the text that user is typing in the input field;
    }


    let { data } = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);

    if (!query.length) {
        data = null;// this means that we didn't type anything and so the value of the data is null;
    }


    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    type="text"
                    autoFocus
                    placeholder='Search for Products'
                    value={query}
                    onChange={onChange}
                />
                <MdClose onClick={() => setShowSearch(false)} />
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    {data?.data?.map(item => (
                        <div
                            key={item.id}
                            className="search-result-item"
                            onClick={() => {
                                navigate("/product/" + item.id);
                                setShowSearch(false);
                            }}
                        >
                            <div className="img-container">
                                <img
                                    src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url}
                                    alt="product"
                                />
                            </div>
                            <div className="prod-details">
                                <span className="name">
                                    {item.attributes.title}
                                </span>
                                <span className="desc">
                                    {item.attributes.desc}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
