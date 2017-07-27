class Trip < ApplicationRecord
  validates :user_id, :status, :host_id, :message, presence: true
  validates :user_id, uniqueness: { scope: :host_id }
  validate :date_check

  def date_check
    dates.each do |date|
      if date.empty?
        errors.add(:dates, "can't be blank")
      end
    end
  end

  belongs_to :host,
             class_name: "User",
             foreign_key: :host_id,
             primary_key: :id

  belongs_to :traveler,
             class_name: "User",
             foreign_key: :user_id,
             primary_key: :id
end
