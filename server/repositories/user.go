package repositories

import (
	"dewe-tour/models"

	"gorm.io/gorm"
)

type UserRepository interface {
	FindUser() ([]models.User, error)
	GetUserById(ID int) (models.User, error)
	GetMyUser(ID int) (models.User, error)
	DeleteUser(user models.User) (models.User, error)
	UpdateProfile(user models.User) (models.User, error)
}

func RepositoryUser(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindUser() ([]models.User, error) {
	var users []models.User
	err := r.db.Find(&users).Error

	return users, err
}

func (r *repository) GetUserById(ID int) (models.User, error) {
	var user models.User
	err := r.db.First(&user, ID).Error

	return user, err
}

func (r *repository) GetMyUser(ID int) (models.User, error) {
	var user models.User
	err := r.db.Where("id=?", ID).First(&user).Error

	return user, err
}

func (r *repository) DeleteUser(user models.User) (models.User, error) {
	err := r.db.Delete(&user).Scan(&user).Error

	return user, err
}

func (r *repository) UpdateProfile(user models.User) (models.User, error) {
	err := r.db.Save(&user).Error

	return user, err
}
