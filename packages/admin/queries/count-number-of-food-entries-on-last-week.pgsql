select to_char(taken_at::date, 'dd-mm-yyyy'), count(taken_at::date) 
from food_entry
WHERE taken_at::date > now()::date - interval '7 days'
group by taken_at::date
order by taken_at::date asc