"""Dataset data retrieval utility."""

from __future__ import annotations

from typing import List
from uuid import UUID

from sqlalchemy import select

from m_flow.adapters.relational import get_db_adapter
from m_flow.data.models import Data, Dataset


async def fetch_dataset_items(dataset_id: UUID) -> List[Data]:
    """Return all data records for a dataset, ordered by size descending."""
    engine = get_db_adapter()

    async with engine.get_async_session() as session:
        query = (
            select(Data)
            .join(Data.datasets)
            .filter(Dataset.id == dataset_id)
            .order_by(Data.data_size.desc())
        )
        result = await session.execute(query)
        return list(result.scalars().all())
