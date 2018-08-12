import React from 'react'
import styled from 'styled-components'
import aviaIcon from './avia.svg'

const Ticket = styled.div`
    width: 566px;
    height: 161px;
    margin-bottom: 20px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);
    display: flex;

    .ticket {
        &__buy-section {
            flex-basis: 200px;
            padding: 25px 20px;
            border-right: 1px solid #eceff1;
        }

        &__buy-button {
            background-color: #ff6d00;
            box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1), 0px 1px 0px #d64d08;
            border-radius: 5px;
            font-weight: 600;
            font-size: 16px;
            text-align: center;
            color: #ffffff;
            border: 0;
            width: 100%;
            cursor: pointer;
            height: 56px;

            &:hover {
                background-color: #ff8124;
                box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25), 0px 1px 0px #f7661d;
            }
        }

        &__company-logo {
            text-align: center;
        }
        
        &__fly-info {
            padding: 25px 20px 0;
            flex-grow: 1;
        }

        &__line {
            display: flex;
            justify-content: space-between;
        }

        &__time {
            font-size: 32px;
            color: #4a4a4a;
            line-height: 26px;
            margin-bottom: 10px;
        }

        &__airport {
            font-weight: 600;
            font-size: 12px;
            color: #4a4a4a;
            line-height: 18px;
        }

        &__date {
            font-size: 12px;
            color: #8b9497;
        }

        &__transfers {
            flex-grow: 1;
            padding: 0 20px;
        }

        &__transfers-count {
            font-weight: bold;
            font-size: 10px;
            text-align: center;
            color: #8b9497;
        }

        &__divider {
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            margin-top: -2px;
        }

        &__divider-line {
            flex-grow: 1;
            height: 1px;
            background-color: #d2d5d6;
        }
    }

    .origin {
        text-align: left;
    }

    .destination {
        text-align: right;
    }
`

export default ({ ticket = {} }) => (
    <Ticket>
        <div className="ticket__buy-section">
            <div className="ticket__company-logo">
                <img src={ticket.logo} alt="" />
            </div>
            <button className="ticket__buy-button">
                Купить <br /> за 21 032
            </button>
        </div>
        <div className="ticket__fly-info">
            <div className="ticket__line">
                <div className="ticket__time origin">09:25</div>
                <div className="ticket__transfers">
                    <div className="ticket__transfers-count">1 пересадка</div>
                    <div className="ticket__divider">
                        <div className="ticket__divider-line"/>
                        <img src={aviaIcon} alt=""/>
                    </div>
                </div>
                <div className="ticket__time destination">11:45</div>
            </div>

            <div className="ticket__line">
                <div className="ticket__airport origin">VVO, Владивосток</div>
                <div className="ticket__airport destination">Тель-Авиа, TLV</div>
            </div>

            <div className="ticket__line">
                <div className="ticket__date origin">9 окт 2018, Пт</div>
                <div className="ticket__date destination">10 окт 2018, Пт</div>
            </div>
        </div>
    </Ticket>
)