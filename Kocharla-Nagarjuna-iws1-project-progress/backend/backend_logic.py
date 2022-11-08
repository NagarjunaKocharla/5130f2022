from datetime import datetime
from dataclasses import dataclass
import datetime


@dataclass(frozen=True)
class Transaction:
    name: str
    symbol: str
    value_usd: float
    purchased_price: float
    date: datetime
    coins: float





def convert_entry_to_transaction(entry):
    return {
        "name": entry[0],
        "symbol": entry[1],
        "value_usd": entry[2]/100,
        "purchased_price": float(entry[3]),
        "date": entry[4].strftime("%Y-%m-%d-%H:%M"),
        "coins": float(entry[5])
    }

    