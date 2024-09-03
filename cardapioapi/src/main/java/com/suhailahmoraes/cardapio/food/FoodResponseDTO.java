package com.suhailahmoraes.cardapio.food;

public record FoodResponseDTO(Long id, String title, String image, Double price) {
    public FoodResponseDTO(Food food) {
        this(food.getId(), food.getImage(), food.getTitle(), food.getPrice());
    }

}
