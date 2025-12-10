# Sample Data for XLSX Creation Lab

This file contains sample data suitable for creating spreadsheets with Claude Code's xlsx skill.

---

## Sample Dataset 1: Project Budget Tracker

Use this data to create a budget tracking spreadsheet with formulas.

### Raw Data

| Category       | Budget (£) | Actual (£) | Notes            |
| -------------- | ---------- | ---------- | ---------------- |
| Development    | 15000      | 12450      | On track         |
| Design         | 8000       | 7200       | Under budget     |
| Content        | 5000       | 5800       | Slight overspend |
| Marketing      | 12000      | 9500       | Campaign delayed |
| Infrastructure | 3000       | 3200       | Server upgrade   |
| Contingency    | 5000       | 1200       | Reserve funds    |

**Total Budget:** £48,000

### Suggested Formulas

- **Remaining:** Budget - Actual
- **% Spent:** Actual / Budget
- **Status:** IF % Spent > 100%, "Over Budget", IF % Spent > 90%, "At Risk", "On Track"

---

## Sample Dataset 2: Sales Team Performance

Use this data to create a sales dashboard with commission calculations.

### Raw Data

| Sales Rep     | Region   | Q4 Target (£) | Q4 Actual (£) | Deals Closed |
| ------------- | -------- | ------------- | ------------- | ------------ |
| Sarah Chen    | North    | 50000         | 62000         | 15           |
| James Wilson  | South    | 45000         | 43000         | 12           |
| Priya Patel   | London   | 60000         | 71000         | 18           |
| Alex Thompson | Midlands | 40000         | 38500         | 10           |
| Emma Roberts  | Scotland | 35000         | 42000         | 14           |

### Suggested Formulas

- **Achievement %:** Actual / Target
- **Commission:** IF Achievement >= 110%, Actual _ 15%, IF Achievement >= 100%, Actual _ 10%, Actual \* 5%
- **Rating:** IF Achievement >= 110%, "Excellent", IF Achievement >= 100%, "Met Target", "Below Target"

### Summary Calculations

- Team Total Target: SUM of all targets
- Team Total Actual: SUM of all actuals
- Team Achievement: Total Actual / Total Target
- Top Performer: Person with highest Achievement %
- Average Deal Size: Total Actual / Total Deals

---

## Sample Dataset 3: Time Tracking Log

Use this data to create a consultant time tracking spreadsheet.

### Raw Data

| Date       | Client       | Project          | Hours | Billable | Rate (£/hr) |
| ---------- | ------------ | ---------------- | ----- | -------- | ----------- |
| 2025-12-02 | Acme Corp    | Website Redesign | 6.5   | Yes      | 85          |
| 2025-12-02 | Internal     | Admin            | 1.5   | No       | 0           |
| 2025-12-03 | TechStart    | API Integration  | 8.0   | Yes      | 95          |
| 2025-12-04 | Acme Corp    | Website Redesign | 7.0   | Yes      | 85          |
| 2025-12-05 | Beta Systems | Consulting       | 4.0   | Yes      | 110         |
| 2025-12-05 | Internal     | Training         | 3.0   | No       | 0           |
| 2025-12-06 | TechStart    | API Integration  | 6.0   | Yes      | 95          |

### Suggested Formulas

- **Amount:** IF Billable = "Yes", Hours \* Rate, 0
- **Total Hours:** SUM of Hours column
- **Billable Hours:** SUMIF where Billable = "Yes"
- **Total Revenue:** SUM of Amount column
- **Utilisation %:** Billable Hours / Total Hours

### By Client Summary

- Use SUMIF to calculate total revenue per client
- Use COUNTIF to count entries per client

---

## Sample Dataset 4: Inventory Tracker

Use this data to create an inventory management spreadsheet.

### Raw Data

| Product Code | Product Name   | Category    | Stock | Reorder Level | Unit Cost (£) | Supplier   |
| ------------ | -------------- | ----------- | ----- | ------------- | ------------- | ---------- |
| SKU-001      | Wireless Mouse | Electronics | 45    | 20            | 12.50         | TechSupply |
| SKU-002      | USB-C Hub      | Electronics | 12    | 25            | 28.00         | TechSupply |
| SKU-003      | Notebook A4    | Stationery  | 150   | 50            | 2.50          | OfficeMax  |
| SKU-004      | Monitor Stand  | Furniture   | 8     | 10            | 45.00         | DeskCo     |
| SKU-005      | Desk Lamp      | Furniture   | 22    | 15            | 35.00         | DeskCo     |
| SKU-006      | Pens (Pack 10) | Stationery  | 85    | 30            | 4.50          | OfficeMax  |

### Suggested Formulas

- **Stock Value:** Stock \* Unit Cost
- **Status:** IF Stock <= Reorder Level, "REORDER", "OK"
- **Total Inventory Value:** SUM of Stock Value
- **Items Below Reorder:** COUNTIF where Status = "REORDER"

---

## How to Use This Data

When creating spreadsheets with Claude Code's xlsx skill:

1. **Choose a dataset** from above that matches your learning goal
2. **Define the structure** - which columns, which formulas
3. **Add formatting** - headers bold, numbers with £ symbols, percentages formatted
4. **Include summary section** - aggregations that provide insights
5. **Consider multiple sheets** - detail on one sheet, summary on another

### Example Prompt

```
Using the xlsx skill, create a spreadsheet from the Sales Team Performance
data with:
- Main data table with Achievement % and Commission formulas
- Rating column using IF statements
- Summary section with team totals and averages
- Currency formatting for money columns
- Percentage formatting for Achievement %
- Bold headers and summary rows
```

---

## Tips for Good Spreadsheet Data

1. **Consistent data types** - Don't mix text and numbers in the same column
2. **Clear headers** - Column names should be self-explanatory
3. **Appropriate precision** - Currency to 2 decimals, percentages to 1
4. **Logical grouping** - Related columns adjacent
5. **Summary separated** - Keep totals visually distinct from detail rows
