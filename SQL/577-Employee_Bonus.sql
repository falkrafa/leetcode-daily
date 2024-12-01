# Write your MySQL query statement below

select p.name, p1.bonus from employee p left join Bonus p1 on p.empId = p1.empId where p1.bonus is null or p1.bonus < 1000
