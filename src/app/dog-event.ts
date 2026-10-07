//I can't have click be delete or I can't view my list item

export interface DogEvent {
id: number;
action: 'opened' | 'favourited' | 'removed';
}
