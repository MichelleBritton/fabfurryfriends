WEIGHT_CHOICES = ["pound", "kilogram", "ounces", "grams", "tonnes"]
VOLUME_CHOICES = [
    "millileter",
    "litre",
    "gallon",
    "teaspoon",
    "tablespoon",
    "fluid-ounce",
    "quart",
    "pint",
    "cup",
]
QUANTITY_CHOICES = ["each", "dozen", "hundreds", "thousands"]
TIME_CHOICES = ["hours", "minutes", "seconds"]
LENGTH_CHOICES = ["millimeter", "meter", "centimeter", "inch", "foot", "yard"]

grouped_unit_choices = {
    "Weight": WEIGHT_CHOICES,
    "Volume": VOLUME_CHOICES,
    "Quantity": QUANTITY_CHOICES,
    "Time": TIME_CHOICES,
    "Length": LENGTH_CHOICES,
}
