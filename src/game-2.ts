export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items: Array<Item> = []) {
    this.items = items;
  }

  // Método principal para actualizar la calidad
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      switch (item.name) {
        case "Aged Brie":
          this.updateAgedBrie(item);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          this.updateBackstagePasses(item);
          break;
        case "Sulfuras, Hand of Ragnaros":
          // No hace nada porque Sulfuras no cambia
          break;
        default:
          this.updateNormalItem(item);
          break;
      }

      //Disminuir las ventas de todos los artículos excepto Sulfuras
      if (item.name !== "Sulfuras, Hand of Ragnaros") {
        item.sellIn -= 1;
      }

      // Si sellIn es negativo, la calidad se actualiza aún más rápido
      if (item.sellIn < 0) {
        this.handleExpiredItem(item);
      }
    }

    return this.items;
  }

  // Actualiza la calidad de Aged Brie
  private updateAgedBrie(item: Item) {
    if (item.quality < 50) {
      item.quality += 1;
    }
  }

  // Actualiza la calidad de Backstage passes
  private updateBackstagePasses(item: Item) {
    if (item.quality < 50) {
      item.quality += 1; // Aumenta 1 por cada día que pasa
      if (item.sellIn < 11) {
        item.quality += 1; // Aumenta 2 cuando hay 10 días o menos
      }
      if (item.sellIn < 6) {
        item.quality += 1; // Aumenta 3 cuando hay 5 días o menos
      }
    }

    // La calidad se vuelve 0 después del concierto
    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }

  // Actualiza la calidad de los artículos normales o "Conjured"
  private updateNormalItem(item: Item) {
    if (item.name.startsWith("Conjured")) {
      this.updateConjuredItem(item);
    } else {
      if (item.quality > 0) {
        item.quality -= 1; // Decrementa la calidad
      }
    }
  }

  // Actualiza la calidad de los artículos "Conjured"
  private updateConjuredItem(item: Item) {
    if (item.quality > 0) {
      item.quality -= 2; // Los artículos Conjured pierden calidad dos veces más rápido
    }
  }

  // Maneja los artículos que han pasado la fecha de vencimiento
  private handleExpiredItem(item: Item) {
    if (item.name !== "Aged Brie") {
      if (item.name !== "Backstage passes to a TAFKAL80ETC concert") {
        if (item.quality > 0) {
          item.quality -= 1; // Decrementa la calidad dos veces más rápido para artículos caducados
        }
      } else {
        item.quality = 0; // Los Backstage passes se vuelven 0 después del evento
      }
    } else {
      if (item.quality < 50) {
        item.quality += 1; // Aged Brie sigue aumentando su calidad después de la fecha de vencimiento
      }
    }
  }
}
