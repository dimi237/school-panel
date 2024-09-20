<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Customer extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable = [
        'name',
        'birthdate',
        'birthplace',
        'certificate',
        'certifdate',
        'speciality',
        'role',
        'certificate_id',
        'badge_id',
        'expiration',
        'badge_date',
        'certificate_date',
        'code',
    ];
}
