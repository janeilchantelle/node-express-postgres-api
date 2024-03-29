DELETE FROM categories
WHERE category_id NOT IN (
    SELECT MIN(category_id)
    FROM categories
    GROUP BY name
);
