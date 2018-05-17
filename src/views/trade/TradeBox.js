import React, { Component } from "react";
import { Link } from "react-router-dom";
import TradeForm from "./TradeForm";

class TradeBox extends Component {
    render() {
        const { tradeType, marketName, coinName } = this.props;

        return [
            <div key="info" className="property-info">
                <span>
                    {marketName} 可用 0.00000000
                    {false && (
                        <Link className="recharge-link" to="#">
                            充币
                        </Link>
                    )}
                </span>
                <span>
                    {coinName} 可用 0.00000000
                    {false && (
                        <Link className="recharge-link" to="#">
                            充币
                        </Link>
                    )}
                </span>
            </div>,
            <TradeForm
                key="buy"
                type="buy"
                tradeType={tradeType}
                marketName={marketName}
                coinName={coinName}
            />,
            <TradeForm
                key="sell"
                type="sell"
                tradeType={tradeType}
                marketName={marketName}
                coinName={coinName}
            />
        ];
    }
}

export default TradeBox;
