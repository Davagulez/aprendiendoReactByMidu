import "./Cart.css"
import { useId } from "react";
import { ClearCartIcon, CartIcon } from "./Icons";

export function Cart() {
    const cartCheckboxId = useId()

    return (
        <>
            <label htmlFor={cartCheckboxId} className="cart-button">
                < CartIcon />
            </label>
            <input type="checkbox" name="checkbox" id={cartCheckboxId} hidden />

            <aside className="cart">
                <ul>
                    <li>
                        <img src="https://i.dummyjson.com/data/products/2/thumbnail.jpg" alt="Iphone" />
                        <div>
                            <strong>Iphone</strong> - $1499
                        </div>
                        <footer>
                            <small>
                                Qty: 1
                            </small>
                            <button>+</button>
                        </footer>
                    </li>
                </ul>

                <button>
                    < ClearCartIcon />
                </button>
            </aside>
        </>
    )
}