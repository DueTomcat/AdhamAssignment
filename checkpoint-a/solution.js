import { findAllOrders, findOrderById } from "./orders-db.js";

export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter(
    (o) => o.city === "Alexandria" && o.status === "cancelled"
  );
}

export function summarize(orders) {
  return orders.reduce((max, o) => (o.price > max ? o.price : max), 0);
}

export async function describeOrder(id) {
  try {
    const o = await findOrderById(id);
    return `${o.quantity} x ${o.item} for ${o.student}`;
  } catch {
    return `No order with id ${id}`;
  }
}

export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map((o) => ({ student: o.student, item: o.item }))
  );
}