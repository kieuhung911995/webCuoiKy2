import "./Discount.css";
import { FcMoneyTransfer } from "react-icons/fc";
import { GiMoneyStack } from "react-icons/gi";
import { BsClipboardData } from "react-icons/bs";

const dataDiscounts = [
  {
    id: "1",
    value: "0$",
    fee: "10%",
    user: "leh4wow",
    percent: "3.12%",
    winner: "ERICA",
    earn: "159118.18$",
  },
  {
    id: "2",
    value: "1$",
    fee: "10%",
    user: "Триадда",
    percent: "3.69%",
    winner: "pro_can_pro",
    earn: "141495.17$",
  },
  {
    id: "3",
    value: "10$",
    fee: "10%",
    user: "roma666",
    percent: "3.81%",
    winner: "ERICA",
    earn: "124459.07$",
  },
  {
    id: "4",
    value: "100$",
    fee: "10%",
    user: "14228",
    percent: "3.96%",
    winner: "Nickname is hidden",
    earn: "110499.29$",
  },
  {
    id: "5",
    value: "1000$",
    fee: "9%",
    user: "роге",
    percent: "3.97%",
    winner: "ERICA",
    earn: "83450.87$",
  },
  {
    id: "6",
    value: "10000$",
    fee: "8%",
    user: "***____***",
    percent: "4.04%",
    winner: "paprika_",
    earn: "70931.77$",
  },
  {
    id: "7",
    value: "100000$",
    fee: "7%",
    user: "171402",
    percent: "4.08%",
    winner: "pro_can_pro",
    earn: "62167.35$",
  },
  {
    id: "8",
    value: "1000000$",
    fee: "6%",
    user: "САМ СЕБЕ КАППЕР",
    percent: "4.09%",
    winner: "paprika_",
    earn: "57114.39$",
  },
  {
    id: "9",
    value: "10000000$",
    fee: "5%",
    user: "элджей",
    percent: "4.1%",
    winner: "paprika_",
    earn: "51658.19$",
  },
  {
    id: "10",
    value: "100000000$",
    fee: "4%",
    user: "Kvyyzee",
    percent: "4.11%",
    winner: "роге",
    earn: "47743.02$",
  },
];

const DiscountComponent1 = ({ value, fee }) => {
  return (
    <div className="discountComponent">
      <div>{value}</div>
      <div style={{ color: "white", fontWeight: "600" }}>{fee}</div>
    </div>
  );
};

const DiscountComponent2 = ({ id, user, percent }) => {
  return (
    <div className="discountComponent">
      <div className="discountComponent2">
        <div style={{ marginRight: "20px" }}>{id}</div>
        <div>{user}</div>
      </div>
      <div style={{ color: "white", fontWeight: "600" }}>{percent}</div>
    </div>
  );
};

const DiscountComponent3 = ({ id, winner, earn }) => {
  return (
    <div className="discountComponent">
      <div className="discountComponent2">
        <div style={{ marginRight: "20px" }}>{id}</div>
        <div>{winner}</div>
      </div>
      <div style={{ color: "white", fontWeight: "600" }}>{earn}</div>
    </div>
  );
};

const Discount = () => {
  return (
    <div className="discount">
      <div className="discount-items">
        <div className="discount-items-header">
          <FcMoneyTransfer size={"50px"} />
          <span style={{ color: "white", marginLeft: "20px" }}>
            Place bets and reduce the fee for withdrawing funds
          </span>
        </div>
        <div className="discount-items-table">
          <div className="discount-items-table-header">
            Dependence of the fee on bets:
          </div>
          <div className="discount-items-table-main">
            {dataDiscounts.map((dataDiscount) => (
              <DiscountComponent1
                value={dataDiscount.value}
                fee={dataDiscount.fee}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="discount-items">
        <div className="discount-items-header">
          <GiMoneyStack size={"50px"} color={"#6BA908"} />
          <span style={{ color: "white", marginLeft: "20px" }}>
            The fee is reduced in proportion to your betting amount
          </span>
        </div>
        <div className="discount-items-table">
          <div className="discount-items-table-header">Most active users:</div>
          <div className="discount-items-table-main">
            {dataDiscounts.map((dataDiscount) => (
              <DiscountComponent2
                id={dataDiscount.id}
                user={dataDiscount.user}
                percent={dataDiscount.percent}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="discount-items">
        <div className="discount-items-header">
          <BsClipboardData size={"50px"} color={"#6BA908"} />
          <span style={{ color: "white", marginLeft: "20px" }}>
            Monthly leaders
          </span>
        </div>
        <div className="discount-items-table">
          <div className="discount-items-table-header">Most active users:</div>
          <div className="discount-items-table-main">
            {dataDiscounts.map((dataDiscount) => (
              <DiscountComponent3
                id={dataDiscount.id}
                winner={dataDiscount.winner}
                earn={dataDiscount.earn}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Discount;
